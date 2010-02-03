function getEventsUrl() {
  var url = "https://events.trabesoluciones.net/";
  return url;
}

function getEventsFeedUrl() {
  return "http://events.trabesoluciones.net/count";
}

function isEventsUrl(url) {
  var events = getEventsUrl();
  if (url.indexOf(events) != 0)
    return false;
  return url.length == events.length || url[events.length] == '?' ||
                       url[events.length] == '#';
}

