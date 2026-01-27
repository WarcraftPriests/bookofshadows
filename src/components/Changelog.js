import React from "react";
import styles from "./Changelog.module.css";

const REPO_URL =
  "https://github.com/WarcraftPriests/bookofshadows";

export default function Changelog({
  docName,
  docPath,
  limit = 10,
}) {
  let data;

  try {
    data = require(`@site/src/generated/changelogs/${docName}.json`);
  } catch {
    return null;
  }

  if (!data.length) return null;

  const fullChangelogUrl = `${REPO_URL}/commits/main/${docPath}`;

  return (
    <div className={styles.changelog}>
      <details className={styles.details}>
        <summary className={styles.summary}>
          Changelog ({data.length})
        </summary>

        <div className={styles.entries}>
          {data.slice(0, limit).map((c) => {
            const date = new Date(c.timestamp);
            return (
              <div key={c.hash} className={styles.entry}>
                <span className={styles.date}>
                  {date.toLocaleDateString()}{" "}
                  {date.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>

                <a
                  className={styles.hash}
                  href={`${REPO_URL}/commit/${c.hash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.hash}
                </a>

                {c.message}
              </div>
            );
          })}
        </div>

        <div className={styles.footer}>
          <a
            href={fullChangelogUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View full changelog on GitHub →
          </a>
        </div>
      </details>
    </div>
  );
}
