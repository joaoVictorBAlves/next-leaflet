import { ListItemButton } from "@mui/material";
import Link from "next/link"

const SidebarItem = ({ children, page, root }) => {
    return (
        <ListItemButton
            component={Link}
            to={root}
            sx={{
                "&: hover": {
                    backgroundColor: "#CBF3F0",
                    color: "#2EC4B6"
                },
                color: "#2EC4B6"
            }}
        >
            {children}
            {page}
        </ListItemButton>
    );
}

export default SidebarItem;