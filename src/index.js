addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Respond to the request
 * @param {Request} request
 */

let yolo = "";

async function handleRequest(request) {
  if (yolo === "") {
    yolo = await CFBUG.get("yolo");
  }

  return new Response(yolo, { status: 200 });
}
