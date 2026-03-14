import {
	Badge,
	Button,
	HStack,
	Icon,
	Image,
	Link,
	SimpleGrid,
	Stack,
} from "@chakra-ui/react";
import { IconChartCircles, IconMapPin } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { ProtonMailIcon, TelegramIcon } from "@/assets/icons.tsx";
import { type Project, ProjectCard } from "@/components/ProjectCard.tsx";
import { List } from "@/theme/components/List.tsx";
import { Typo } from "@/theme/components/Typo.tsx";

export const Route = createFileRoute("/(app)/")({
	component: RouteComponent,
});

const projectsList: Project[] = [
	{
		title: "Diogen",
		description: "Project manager for developers",
		github: "https://github.com/omniroot/diogen",
		link: "https://diogen.vercel.app/",
	},
	{
		title: "Oku",
		description: "Watch and track anime",
		github: "https://github.com/omniroot/oku",
		link: "https://oku.vercel.app/",
	},
];

function RouteComponent() {
	return (
		<Stack w={{ base: "100%", lg: "860px" }} transition={"size"}>
			<List.Root>
				<List.Item>
					<HStack w={"100%"} px={"xl"} py={"lg"} borderRadius={"lg"}>
						<Image src="/logo.svg" w={"72px"} h={"72px"} borderRadius={"lg"} />
						<Stack gap={0}>
							<HStack align={"center"}>
								<Typo variant={"title"} fontWeight={"400"}>
									Hey I`m
								</Typo>
								<Badge
									bg={"secondary"}
									color={"on-secondary"}
									fontSize={"lg"}
									fontWeight={"medium"}
								>
									OMNIROOT
								</Badge>
							</HStack>
							<HStack>
								<Typo>React Frontend Developer</Typo>
							</HStack>
						</Stack>
						<Stack alignItems={"end"} ml={"auto"}></Stack>
					</HStack>
				</List.Item>
				<List.Item>
					<Stack w={"100%"} px={"xl"} py={"lg"} borderRadius={"lg"}>
						<HStack>
							<Icon w={"21px"} h={"21px"} color={"#34C759"}>
								<IconChartCircles />
							</Icon>
							<Typo>Avaliable for work</Typo>
						</HStack>
						<HStack>
							<Icon w={"21px"} h={"21px"} color={"#FFCC00"}>
								<IconMapPin />
							</Icon>
							<Typo>Moscow</Typo>
						</HStack>
						{/* <HStack>
							<Icon w={"21px"} h={"21px"} color={"#FF383C"}>
								<IconHeart />
							</Icon>
							<Text>Avaliable for work</Text>
						</HStack> */}
					</Stack>
				</List.Item>
				<List.Item>
					<HStack w={"100%"} px={"md"} py={"lg"} borderRadius={"lg"} overflowX={"scroll"}>
						<Button
							variant={"surface"}
							fontSize={"16px"}
							borderRadius={"full"}
							px={"lg"}
							py={"md"}
							bg={"surface-container-high"}
							_icon={{ w: "21px", h: "21px" }}
							asChild
						>
							<Link href={"mailto:omnirootofc@proton.me"} target={"_blank"}>
								<ProtonMailIcon />
								Mail
							</Link>
						</Button>
						<Button
							variant={"surface"}
							fontSize={"16px"}
							borderRadius={"full"}
							px={"lg"}
							py={"md"}
							bg={"surface-container-high"}
							_icon={{ w: "21px", h: "21px" }}
							asChild
						>
							<Link href={"https://t.me/omnirootofc"} target={"_blank"}>
								<TelegramIcon />
								Telegram
							</Link>
						</Button>
						{/* <Button
							variant={"surface"}
							fontSize={"16px"}
							borderRadius={"full"}
							px={"lg"}
							py={"md"}
							bg={"surface-container-high"}
							_icon={{ w: "16px", h: "16px" }}
						>
							<ReactIcon />
							React
						</Button>
						<Button
							variant={"surface"}
							fontSize={"16px"}
							borderRadius={"full"}
							px={"lg"}
							py={"md"}
							bg={"surface-container-high"}
							_icon={{ w: "16px", h: "16px" }}
						>
							<ChakraUIIcon />
							Chakra-UI
						</Button>
						<Button
							variant={"surface"}
							fontSize={"16px"}
							borderRadius={"full"}
							px={"lg"}
							py={"md"}
							bg={"surface-container-high"}
							_icon={{ w: "16px", h: "16px" }}
						>
							<ViteIcon />
							Vite
						</Button>
						<Button
							variant={"surface"}
							fontSize={"16px"}
							borderRadius={"full"}
							px={"lg"}
							py={"md"}
							bg={"surface-container-high"}
							_icon={{ w: "16px", h: "16px" }}
						>
							<ZustandIcon />
							Zustand
						</Button>
						<Button
							variant={"surface"}
							fontSize={"16px"}
							borderRadius={"full"}
							px={"lg"}
							py={"md"}
							bg={"surface-container-high"}
							css={{
								"*": {
									animationPlayState: "paused",
								},
							}}
						>
							<KaizenLoader size={18} state="paused" />
							and whatever you want, trust me bro
						</Button> */}
					</HStack>
				</List.Item>
			</List.Root>

			<Typo fontSize={"22px"} fontWeight={"bold"}>
				Projects
			</Typo>
			<SimpleGrid w={"100%"} columns={{ sm: 1, md: 2 }} gap={"md"}>
				{projectsList.map((project) => (
					<ProjectCard key={project.link} project={project} />
				))}
			</SimpleGrid>
			{/* <HStack w={"100%"} h={"fit-content"}> */}
			{/* </HStack> */}
			{/* <Link to={"/design-system"}>Design System</Link> */}
		</Stack>
	);
}
