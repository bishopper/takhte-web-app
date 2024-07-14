import NotificationsIcon from "@mui/icons-material/Notifications";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import RoofingIcon from "@mui/icons-material/Roofing";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Avatar, Button, IconButton } from "@mui/material";

export default function Header() {
	return (
		<div>
			<div className="flex flex-row justify-between">
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
				<IconButton color="secondary" aria-label="add an alarm">
					<NotificationsIcon />
				</IconButton>
				<IconButton color="secondary" aria-label="add an alarm">
					<TelegramIcon />
				</IconButton>
				<IconButton color="secondary" aria-label="add an alarm">
					<RoofingIcon />
				</IconButton>
				<Button
					variant="contained"
					className="bg-blue-800"
					endIcon={<PhoneAndroidIcon />}
				>
					دانلود اپلیکیشن
				</Button>
				<Button
					variant="contained"
					className="bg-yellow-400"
					endIcon={<RocketLaunchIcon />}
				>
					ارتقا حساب کاربری
				</Button>
			</div>
		</div>
	);
}
