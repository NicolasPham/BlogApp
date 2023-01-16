```javascript
- Add aixos in client folder: 
    yarn add axios
  
- In package.json:
    "proxy" : "http://localhost:3000/api"
  
- In Home.jsx page:
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/posts");
        console.log(res);
      }
      fetchPosts();
    }, [])
  
- useLocation from react-router-dom:
    const location = useLocation();
    const postId = location.pathname.split("/")[2];
    
    const {path, search} = useLocation(); //take the path and search propeties in useLocation only

   > At register page:
    const res = await axios.post("/auth/register", {username, email, password});
    res.data && window.location.replace("/login")


- Context and Reducer: create a folder context and create files called "Context.js", "Reducer.js", "Actions.js"
  > In Actions.js:
    export const LoginStart = (userCredential) => ({type: "LOGIN_START"});
    export const LoginSuccess = (user) => ({type: "LOGIN_SUCCESS"});
    export const LoginError = () => ({type: "LOGIN_ERROR"});
  
  > useReducer: accept 2 arguments (reducer, intialState)
    const Reducer = (state, action) => {
        switch(action.type) {
            case "LOGIN_START" :
                return {user: null, isFetching: true, error: false};
            case "LOGIN_SUCCESS" : 
                return {user: action.payload, isFetching: false, error: false}
            default:
                return state;
        }
    }
    
  > in Context.js:
    import {createContext, useReducer} from 'react';
    const INITIAL_STATE = {
        user: JSON.parse(localStorage.getItem("user")), 
        isFetching: fasle, 
        error: false
    }
    
    export const Context = createContext(INITIAL_STATE);
    
    export const ContextProvider = ({children}) => {
        const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
        
        return (
            <Context.Provider value={
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }> 
            { children } 
            </Context.Provider>
        )
    }
  
  - useRef: allow to persist value between render. Return an object called "current"
  
- Localstorage: store user info in the local storage.
  - In file Context.js:
      INTIAL_STATE = {
        user: JSON.parse(localStorage.getItem("user"))
      }
  
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])
    

- Render IMG in Write Post:
    <input type="file" onChange={e => setFile(e.target.files[0])} />
    <img src={URL.createObjectURL(file)} />
    
    

```
