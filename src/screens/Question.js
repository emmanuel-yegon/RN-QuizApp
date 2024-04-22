import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { reactQuestions } from "../config/question";
import * as Progress from "react-native-progress";

export default function Question({ navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [optionsDisabled, setOptionsDisabled] = useState(false);
  const [quizProgress, setQuizProgress] = useState(reactQuestions.length);

  const progress = (currentQuestionIndex + 1) / quizProgress;

  // handle next press
  const handleNext = () => {
    if (currentQuestionIndex === reactQuestions.length - 1) {
      navigation.navigate("Score", { score: score });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setOptionsDisabled(false);
    }
  };

  const handleOptionsPress = (pressedOption) => {
    if (optionsDisabled) return;

    setSelectedOption(pressedOption);
    setOptionsDisabled(true);

    const isAnswerCorrect =
      reactQuestions[currentQuestionIndex].correctAnswer === pressedOption;

    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 10);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Progress.Bar
            progress={progress}
            width={null}
            height={10}
            color={"purple"}
          />
        </View>
      </View>
      <Text style={{ fontSize: 25, marginBottom: 10 }}>
        {reactQuestions[currentQuestionIndex].question}
      </Text>
      {reactQuestions[currentQuestionIndex].options.map((option) => (
        <Pressable
          style={[
            styles.optionsText,
            selectedOption === option
              ? isCorrect
                ? styles.correctOption
                : styles.falseOption
              : styles.normalOption,
          ]}
          onPress={() => handleOptionsPress(option)}
          disable={optionsDisabled}
        >
          <Text>{option}</Text>
        </Pressable>
      ))}
      <Pressable style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentQuestionIndex === reactQuestions.length - 1
            ? "Finish"
            : "Next"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
  },
  optionsText: {
    padding: 13,
    marginVertical: 8,
    borderColor: "purple",
    borderWidth: 2,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "purple",
    borderRadius: 4,
    marginTop: 20,
    padding: 13,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  correctOption: {
    borderColor: "green",
    backgroundColor: "lightgreen",
  },
  falseOption: {
    borderColor: "red",
    backgroundColor: "lightpink",
  },
  normalOption: {
    borderColor: "purple",
  },
});
