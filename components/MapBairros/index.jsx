import dynamic, { noSSR } from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
    ssr: false
});

export default Map;