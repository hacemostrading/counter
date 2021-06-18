import {RecoilRoot,
  useRecoilState, 
  atom,
  selector,
  useRecoilValue} from 'recoil'

function App() {
  return (
    <div>
    <RecoilRoot>
      <TextInput/>
      <Counter/>
    </RecoilRoot>
    </div>
  );
}

const textInputState = atom({
  key:"textInputState",
  default: "",
})

const textInputSelector = selector({
  key:"textInputSelector",
  get: ({get}) => {
    const text = get(textInputState)

    return text.length
  }
})

  function TextInput(){
    const [text, setText] = useRecoilState(textInputState)

    const onInputChange = (input) => {
      setText(input.target.value)
    }
    return (
      <div>
        <input value={text} onChange={onInputChange} />
      </div>
    )
 }

 function Counter(){
   const length = useRecoilValue(textInputSelector)
   return(
     <span>
       {length}
     </span>
   )
 }
export default App;