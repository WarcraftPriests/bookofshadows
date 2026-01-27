// scripts/genDocChangelog.js
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const docsDir = path.join(process.cwd(), "docs");
const outDir = path.join(process.cwd(), "src", "generated", "changelogs");

// ensure output dir exists
fs.mkdirSync(outDir, { recursive: true });

// For each .md or .mdx in /docs generate history
function getGitLogForFile(filePath) {
  try {
    const stdout = execSync(
      `git log --pretty=format:"%h|%aI|%s" -- ${filePath}`,
      { encoding: "utf8" }
    );
    return stdout
      .trim()
      .split("\n")
      .map((line) => {
        const [hash, timestamp, message] = line.split("|");
        return { hash, timestamp, message };
      });
  } catch (err) {
    console.error("Git log failed", err);
    return [];
  }
}

// walk docs folder
function walkDir(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) {
      results.push(...walkDir(full));
    } else if (full.match(/\.(md|mdx)$/)) {
      results.push(full);
    }
  }
  return results;
}

for (const file of walkDir(docsDir)) {
  const relativePath = path.relative(process.cwd(), file);
  const log = getGitLogForFile(relativePath);
  const base = path.basename(file);
  const outFile = path.join(outDir, `${base}.json`);
  fs.writeFileSync(outFile, JSON.stringify(log, null, 2));
  console.log(`wrote changelog: ${outFile}`);
}
