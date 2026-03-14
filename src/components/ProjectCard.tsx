import { Box, Button, HStack, Link, Stack } from "@chakra-ui/react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Typo } from "@/theme/components/Typo.tsx";

export interface Project {
	title: string;
	description: string;
	github: string;
	link: string;
}

interface Props {
	project: Project;
}
export const ProjectCard: React.FC<Props> = ({ project }) => {
	return (
		<Stack bg={"surface-container"} borderRadius={"lg"} p={"lg"}>
			<Box w={"100%"} h={"120px"} bg={"primary"} borderRadius={"lg"}></Box>
			<Typo variant={"title"} fontWeight={"bold"}>
				{project.title}
			</Typo>
			<Typo>{project.description}</Typo>
			<HStack w={"100%"} justify={"end"}>
				<Button
					variant={"surface"}
					bg={"surface-container-high"}
					_icon={{ w: "18px" }}
					asChild
				>
					<Link href={project.github} target={"_blank"}>
						<IconBrandGithub />
						Github
					</Link>
				</Button>
				<Button variant={"secondary"} _icon={{ w: "18px" }} asChild>
					<Link href={project.link} target={"_blank"}>
						<IconExternalLink />
						View
					</Link>
				</Button>
			</HStack>
		</Stack>
	);
};
