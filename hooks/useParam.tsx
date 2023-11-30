"use client";
import { useParams } from "next/navigation";

function useParam() {
  const { id } = useParams();
  return { id };
}

export default useParam;
