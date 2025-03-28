"use client";
import Container from "./_components/Container";
import { TaskProvider } from "./_context/TaskContext";

export default function Home() {
  return (
    <TaskProvider>
      <Container />
    </TaskProvider>
  );
}
