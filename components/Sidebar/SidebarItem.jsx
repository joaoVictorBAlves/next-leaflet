import { ListItemButton } from "@mui/material";
import Link from "next/link"

const SidebarItem = (props) => {
    return (
        <ListItemButton
            component={Link}
            to={props.root}
            sx={{
                "&: hover": {
                    backgroundColor: "#CBF3F0",
                    color: "#2EC4B6"
                },
                color: "#2EC4B6"
            }}
        >
            {props.children}
            {props.page}
        </ListItemButton>
    );
}

export default SidebarItem;