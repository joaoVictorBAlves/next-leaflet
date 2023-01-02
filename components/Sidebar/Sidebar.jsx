import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import Image from "next/image";
import { FaFingerprint, FaGlobeAmericas, FaHandPointUp, FaMap, FaMapMarker, FaMapMarkerAlt, FaSearch, FaToggleOn } from "react-icons/fa"
import logo from "../../assets/logo.png"
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: "200px",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: "200px",
                    boxSizing: "border-box",
                    borderRight: "0px",
                    backgroundColor: "#FEFEFE",
                    color: "#CBF3F0"
                }
            }}
        >
            <List disablePadding>
                <Toolbar sx={{ marginBottom: "20px" }}>
                    <Stack
                        sx={{ width: 100 }}
                        direction="row"
                        justifyContent="center"
                    >
                        <Image style={{paddingLeft: 50}} src={logo} width={200} height={60}/>
                    </Stack>
                </Toolbar>
                <SidebarItem page={"Mapa Mundi"} root={"/"}>
                    <FaGlobeAmericas size={20} style={{ margin: 10 }} />
                </SidebarItem>
                <SidebarItem page={"bairros"} root={"map-bairros"}>
                    <FaMap size={20} style={{ margin: 10 }} />
                </SidebarItem>
                <SidebarItem page={"Toque"} root={"map-touch"}>
                    <FaHandPointUp size={20} style={{ margin: 10 }} />
                </SidebarItem>
                <SidebarItem page={"Pesquisar"} root={"map-geojson"}>
                    <FaSearch size={20} style={{ margin: 10 }} />
                </SidebarItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;