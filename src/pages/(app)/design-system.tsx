import { Box, Button, For, HStack, Stack } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import { ColorModeButton } from "@/theme/components/color-mode.tsx";
import { Typo } from "@/theme/components/Typo.tsx";

export const Route = createFileRoute("/(app)/design-system")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<h1>Design System</h1>
			<ColorModeButton />
			<Box bg={"red"} w={"100px"} h={"100px"} p={""}></Box>

			<h2>Core</h2>
			<h3>Spacing: [2px, 4px, 6px, 8px, 10px]</h3>
			<h3>Radius: </h3>

			<Stack gap={4}>
				<Typo variant={"display"} size={"lg"}>
					Display Large
				</Typo>
				<Typo variant={"display"} size={"md"}>
					Display Medium
				</Typo>
				<Typo variant={"display"} size={"sm"}>
					Display Small
				</Typo>
				<Typo variant={"title"} size={"lg"}>
					Title Large
				</Typo>
				<Typo variant={"title"} size={"md"}>
					Title Medium
				</Typo>
				<Typo variant={"title"} size={"sm"}>
					Title Small
				</Typo>
				<Typo variant={"body"} size={"lg"}>
					Body Large
				</Typo>
				<Typo variant={"body"} size={"md"}>
					Body Medium
				</Typo>
				<Typo variant={"body"} size={"sm"}>
					Body Small
				</Typo>
				<Typo variant={"label"} size={"lg"}>
					Label Large
				</Typo>
				<Typo variant={"label"} size={"md"}>
					Label Medium
				</Typo>
				<Typo variant={"label"} size={"sm"}>
					Label Small
				</Typo>
			</Stack>

			<HStack>
				<For each={["none", "xs", "sm", "md", "lg", "xl", "full"]}>
					{(size) => {
						return (
							<Button key={size} borderRadius={size}>
								radius:
								{size}
							</Button>
						);
					}}
				</For>
			</HStack>
		</div>
	);
}
