import { createContext, useState } from 'react';

export const Context = createContext();

const ContextComponent = (props) => {
  // abot
  const [about, setAbout] = useState('');

  //   Personal Overview
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [dob, setDob] = useState('');
  const [relationSheep, setRelationSheep] = useState('');
  const [nationality, setNationality] = useState('');
  const [git, setGit] = useState('');

  // skill
  const [skillList, setSkillList] = useState([]);
  // language
  const [langList, setLangList] = useState([]);
  // education
  const [eduList, setEduList] = useState([]);
  // experience
  const [expList, setExpList] = useState([]);
  // achivement
  const [echList, setEchList] = useState([]);

  const addClickhandler = (arr, setArr) => {
    const items = [...arr];
    items.push({
      valOne: '',
      valTwo: '',
    });
    setArr(items);
  };
  const deleteClickHandler = (index, arr, setArr) => {
    const items = [...arr];
    items.splice(index, 1);
    setArr(items);
  };

  const StoreValues = {
    about: {
      about,
      setAbout,
    },
    personalOverview: {
      name,
      setName,
      email,
      setEmail,
      number,
      setNumber,
      dob,
      setDob,
      relationSheep,
      setRelationSheep,
      nationality,
      setNationality,
      git,
      setGit,
    },
    skills: {
      skillList,
      setSkillList,
      addClickhandler,
      deleteClickHandler,
    },
    language: {
      langList,
      setLangList,
      addClickhandler,
      deleteClickHandler,
    },
    eduaction: {
      eduList,
      setEduList,
      addClickhandler,
      deleteClickHandler,
    },
    experience: {
      expList,
      setExpList,
      addClickhandler,
      deleteClickHandler,
    },
    achivement: {
      echList,
      setEchList,
      addClickhandler,
      deleteClickHandler,
    },
  };

  return (
    <Context.Provider value={StoreValues}>{props.children}</Context.Provider>
  );
};

export default ContextComponent;
