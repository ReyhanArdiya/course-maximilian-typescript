import {
	Button,
	Container,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Radio,
	RadioGroup,
	Textarea,
	useBoolean, VStack
} from "@chakra-ui/react";
import { FormEventHandler, useRef, useState } from "react";
import { ProjectStatus } from "../../models/Project";
import { useProject } from "../../store/project-context";

// export interface FormProps {}

const Form = () => {
	const titleRef = useRef<HTMLInputElement>(null);
	const descriptionRef = useRef<HTMLTextAreaElement>(null);
	const peopleRef = useRef<HTMLInputElement>(null);
	const [err, setErr] = useState<Error | null>(null);
	const [isActive, { toggle }] = useBoolean(true);

	const status = isActive ? ProjectStatus.ACTIVE : ProjectStatus.FINISHED;
	console.log(status);
	const { projectAdded } = useProject();

	const onSubmitHandler: FormEventHandler = e => {
		e.preventDefault();

		if (titleRef.current && descriptionRef.current && peopleRef.current) {
			try {
				projectAdded(
					titleRef.current.value,
					descriptionRef.current.value,
					+peopleRef.current.value,
					status
				);
				setErr(null);
				titleRef.current.value = "";
				descriptionRef.current.value = "";
				peopleRef.current.value = "0";

			} catch (err) {
				if (err instanceof Error) {
					setErr(err);
				}
			}
		}
	};

	return (
		<Container
			bg="purple.300"
			p="4"
			borderRadius="2xl"
			// boxShadow="2xl"
		>
			<VStack as="form" onSubmit={onSubmitHandler}>
				<FormControl isInvalid={!!err}>
					<FormLabel>Title</FormLabel>
					<Input ref={titleRef} bg="white" type="text" />
					<FormErrorMessage>{err?.message}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={!!err}>
					<FormLabel >Description</FormLabel>
					<Textarea
						ref={descriptionRef}
						bg="white"
						rows={3}
						resize={"none"}
					/>
					<FormErrorMessage>{err?.message}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={!!err}>
					<FormLabel>People</FormLabel>
					<NumberInput>
						<NumberInputField ref={peopleRef} bg="white" />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					<FormErrorMessage>{err?.message}</FormErrorMessage>
				</FormControl>
				<FormControl>
					<RadioGroup onChange={toggle} value={status}>
						<Radio value={ProjectStatus.ACTIVE}>Active</Radio>
						<Radio value={ProjectStatus.FINISHED}>Finished</Radio>
					</RadioGroup>
				</FormControl>
				<Button type="submit" colorScheme="purple">
					Add Project
				</Button>
			</VStack>
		</Container>
	);
};

export default Form;
