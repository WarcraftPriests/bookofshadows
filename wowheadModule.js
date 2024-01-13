export function onRouteUpdate({ location }) {
    setTimeout(function () {
        window.$WowheadPower.refreshLinks();
    }, 0);
};