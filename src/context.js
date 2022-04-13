import React, {useState, useEffect, useContext} from 'react';

const getLocalStorage = () => {
    let posts = localStorage.getItem('listPost');

    if(posts) {
        return JSON.parse(localStorage.getItem('listPost'))
    } else {
        return [];
    }
}

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    //todo ------- user post status
    const [postInput, setPostInput] = useState('');
    const [postList, setPostList] = useState(getLocalStorage());
    const [submit, setSubmit] = useState(false);
    const [editing ,setEditing] = useState(false);
    const [editId , setEditId] = useState(null);

    //todo --------- when user click for post
    const [postclick, setPostClick] = useState(false);

    //todo -------- when user click more button
    const [showMore, setShowMore] = useState(false);

    const OpenPostForm = () => {
        setPostClick(true)
    }

    const ClosePostForm = () => {
        setPostClick(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(postInput && editing) {
            const NewItems = postList.map((item) => {
                if(item.id === editId) {
                    return { ...item, post: postInput}
                }
                return item;
            })
            setPostList(NewItems);
            setPostInput('');
            setEditing(false);
            setEditId(null);
            setPostClick(false);
            setShowMore(false);
        }
        else {
            const newItem = {id: new Date().getTime().toString(), post:postInput, time: `${new Date().getHours().toString()}:${new Date().getMinutes().toString()}`}
            
            setPostList([...postList, newItem])
            setPostInput('')
            setSubmit(false);
            setPostClick(false);
            setShowMore(false);
        }
    }

    const handleKeyup = () => {
        if(postInput.trim() === '') {
            setSubmit(false)
        }
        else {
            setSubmit(true)
        }
    }

    const DeletePost = (id) => {
        const remove = postList.filter((item) => item.id !== id);
        setPostList(remove);
    }

    const EditPost = (id) => {
        const editItem = postList.find((item) => item.id === id);
        setPostClick(true);
        setEditing(true);
        setEditId(id);
        setPostInput(editItem.post);

    }

    useEffect(() => {
        localStorage.setItem('listPost', JSON.stringify(postList))
    }, [postList]);

    const [people, setPeople] = useState([]);
    const url = 'https://api.github.com/users';
  
    const fetchPerson = async() => {
      const resp = await fetch(url)
      const data = await resp.json()
      
      setPeople(data);
    }
  
    useEffect(() => {
      fetchPerson()
    }, [])
  
    return (
        <AppContext.Provider
            value={{
                OpenPostForm,
                ClosePostForm,
                postclick,
                postInput,
                setPostInput,
                postList,
                submit,
                handleKeyup,
                handleSubmit,
                DeletePost,
                EditPost,
                showMore,
                setShowMore,
                people
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}