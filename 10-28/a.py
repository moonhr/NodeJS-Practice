import json

data = {"name": "문혜림", "age": 25, "like": "아메리카노"}

# ensure_ascii=False를 사용해서 이스케이프 형식이 아닌 한글 형식으로 출력, encoding='utf-8' 지정
with open("data.json", "w", encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False)