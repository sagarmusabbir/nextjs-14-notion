import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Musabbirs Terminal",
    short_name: "MS",
    description:
      "This is Musabbir sagar, A web development polymath and digital nomad who loves to create stunning websites with cutting-edge technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#94a3b8",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
