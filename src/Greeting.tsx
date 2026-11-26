export function Greeting() {
  // URL의 name을 받아 인사말 표시
  const name = new URLSearchParams(location.search).get("name") ?? "손님";
  return <h1>안녕하세요, {name}님</h1>;
}
