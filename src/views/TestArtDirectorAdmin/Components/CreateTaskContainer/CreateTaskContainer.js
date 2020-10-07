import "./CreateTaskContainer.scss";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
	setTaskState,
	setInitialState,
	setTaskNumber,
	setTestProps,
} from "../../../../redux/actions";
import {
	WELCOME_SCREEN,
	ILLUSTRATION_RADIO_BUTTONS,
	QUSETION_ANSWER,
	WORDS_RADIO_BUTTONS,
	ILLUSTRATIONS_ANSWERS,
} from "../../helpers/taskTypes/taskTypes";

import {
	getTaskFromServer,
	handlerSaveTaskToDB,
} from "../../helpers/workWithApi";

import TopContainer from "./Containers/TopContainer/TopContainer";
import BottomContainer from "./Containers/BottomContainer/BottomContainer";
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";
import SplitScreen from "./Components/SplitScreen/SplitScreen";
import QAList from "./Components/QAList/QAList";
import WordList from "./Components/SplitScreen/WordList/WordList";
import IllustrationsAnswers from "./Components/IllustrationsAnswers/IllustrationsAnswers";

const getPage = (taskType) => {
	switch (taskType) {
		case WELCOME_SCREEN:
			return <WelcomeScreen />;
		case ILLUSTRATION_RADIO_BUTTONS:
			return <SplitScreen />;
		case ILLUSTRATIONS_ANSWERS:
			return <IllustrationsAnswers />;
		case QUSETION_ANSWER:
			return <QAList />;
		case WORDS_RADIO_BUTTONS:
			return <SplitScreen rightSide={<WordList />} />;
		default:
			break;
	}
};

function CreateTaskContainer() {
	const dispatch = useDispatch();

	const task = useSelector((state) => state.task);
	const taskType = useSelector((state) => state.task.type);
	const testId = useSelector((state) => state._id);

	useEffect(() => {
		// console.log("delau krasivo v LOADER");
		getTaskFromServer(testId).then((res) => {
			// console.log("фетчим/диспатчим таск");
			// console.log(res);
			dispatch(setTestProps(res.task.tt_id));
			dispatch(setTaskState(res.task));
		});
	}, [dispatch]);

	useEffect(() => {
		return () => {
			console.log("ia udalilsia");
			dispatch(setInitialState());
		};
	}, [dispatch]);

	useEffect(() => {
		if (task._id === "") return;
		console.log("ia STATE sohranilsia v LOADER");
		// console.log(task);
		handlerSaveTaskToDB({ task: { ...task } }).then((res) => {
			if (res.task.task_number === task.task_number) return;
			dispatch(setTaskNumber(res.task.task_number));
		});
	}, [task, dispatch]);

	return (
		<div className="body-wrapper--CreateTaskContainer">
			<div className="wrapper-inline-block">
				<TopContainer />
				<BottomContainer>{getPage(taskType)}</BottomContainer>
			</div>
		</div>
	);
}

export default CreateTaskContainer;
