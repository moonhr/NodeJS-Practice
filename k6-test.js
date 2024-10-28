import http from "k6/http";

//가상유저 100명이 10초동안 계속 요청을 보내는 설정
export const options = {
  vus: 100,
  duration: "10s",
}

export default function () {
  http.get("http://localhost:8000");
}
