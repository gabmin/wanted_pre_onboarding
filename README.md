## 원티드 프리 온 보딩 사전 과제

### 목차

1.  Toggle
2.  Modal
3.  Tab
4.  Tag
5.  AutoComplete
6.  ClickToEdit

### 1. Toggle

![](https://blog.kakaocdn.net/dn/Hhk3u/btrs2mCBmEy/gUnpRRtJ9tdxEofVVwQnEk/img.gif)

가장 단순하게 생각해서 스위치 On/Off 를 boolean 값으로 state에 저장하여 state에 따라 css가 다르게 적용되도록 기능을 구현하였습니다.

styled-componets를 사용하여 state를 전달하여 삼항연산자를 통해 css가 변경되도록 구현하였습니다.

버튼에는 absolute 속성을 줘서 위치를 조정할 수 있도록 하였고 transition 속성을 통해 애니메이션 효과를 추가하였습니다.

<br>

### 2. Modal

![](https://blog.kakaocdn.net/dn/HjTK0/btrs6aHza4O/ZxPjajpTeX8GEBCFqa9BK0/img.gif)

Modal Open/Close 상태를 state의 boolean 값으로 저장하여 state가 true가 되었을 때, Modal창이 보이도록 기능을 구현하였습니다.

Open Modal 버튼에 클릭이벤트로 state를 true로 바뀌게 하여 modal창을 띄우고 x 버튼을 클릭시 state가 false로 바뀌어 창이 닫히도록 기능을 구현하였습니다.

Modal 창의 외부에 opacity를 줘서 투명도를 조정하려 했지만 그럴 경우 Modal 창 자체에도 적용이 되어 background-color에 rgba 값을 할당하여 외부에만 적용되도록 하였습니다.

<br>

### 3. Tab

![](https://blog.kakaocdn.net/dn/bevw6h/btrs2EJIvd9/stIxlKbzFdNiu3GgYEmHt1/img.gif)

tab의 상태를 state에 저장하여 state 값에 따라 css와 출력값이 바뀌도록 기능을 구현하였습니다.

텝의 각 버튼에 클릭이벤트가 발생하면 state가 "ONE", "TWO", "THREE" 로 바뀌도록 하여 css가 변경되도록 하였습니다.

styled-componets에 state를 넘겨 background-color와 font color가 변경되도록 하였습니다.

<br>

### 4. Tag

![](https://blog.kakaocdn.net/dn/yBmZ4/btrs7l9GJR4/woHItsc2rGz7vpM4zDiOL1/img.gif)

처음에는 input 안에 추가된 tag가 들어가는 것으로 생각해서 어려움을 겪었지만, Velog의 작성하기 페이지에 tag 기능을 관리자 도구를 통해 기능 방식을 활용하여 기능을 구현하였습니다.

div 태그로 input 형태를 나타내고 div 안에 tag와 input이 flex 형태로 나타내도록 하여 tag를 추가할 때마다 input이 밀리도록 기능을 구현하였습니다.

state는 입력값과 입력된 tag 배열 2개를 만들어 사용하였습니다. input에 onkeypress를 설정하여 enter를 누르면 입력값이 tagArr라는 state 배열에 추가되도록 하였습니다.

추가된 배열은 map 매서드를 통해서 모든 배열이 tag 형식으로 나타나도록 기능을 구현하였습니다.

태그 삭제 기능은 버튼 클릭시 해당 tag의 index를 전달하여 해당 index의 tag를 filter 매서드를 통해 제거되도록 기능을 구현하였습니다.

<br>

### 5. AutoComplete

![](https://blog.kakaocdn.net/dn/brtLXm/btrs6aOmcHO/lBmivZcelyOqqNqrFSvPEK/img.gif)

input의 입력값을 저장하기 위한 state 한 가지만 사용하여 기능을 구현 하였습니다.

관련된 단어를 찾는 기능은 filter와 includes 기능을 활용하여 해당하는 단어만 나타나도록 하였습니다. 그러나 이럴 경우 state가 ""인 빈 값일 경우에는 모든 검색 데이터가 나타나는 현상이 발생하였습니다. 그래서 삼항연산자를 사용하여 state가 ""일 경우 null값이 할당 되도록 하여 문제를 해결하였습니다.

filter를 통해 만들어진 관련 단어 배열을 map 매서드를 통해 모든 단어가 나타나도록 하였습니다. 각각의 단어에 onclick 이벤트를 추가하여 클릭 이밴트 발생시 state가 해당 단어로 바뀌도록 하였습니다.

clear 버튼은 클릭시 state가 ""으로 바뀌게 하였고 ""값은 삼항연산자에 의해 null이 할당되어 초기화가 되도록 기능을 구현하였습니다.

<br>

### 6. AutoComplete

![](https://blog.kakaocdn.net/dn/RvjP7/btrs7BRXzGD/4jm26mBMdSwZFozR27diG1/img.gif)

입력값을 state에 저장하여 바로 출력값으로 나타내면 한글자 입력할 때마다 리랜더링이 발생하여 원하는 결과를 만들지 못하였습니다. 그래서 구글링을 통해 onBulr라는 매서드를 알게 되었고 이를 통해 문제를 해결하였습니다.

입력값을 name라는 state에 저장하고 bulr가 발생하면 name을 inputname이라는 state에 저장하도록 하여 입력후 input이 focus-out 됐을 경우에 state가 변경되도록 하여 리랜더링이 한 번만 발생하도록 기능을 구현하였습니다.
