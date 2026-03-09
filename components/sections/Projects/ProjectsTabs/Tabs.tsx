"use client";

import { useState } from "react";
import { User, Category } from "@/types/user";
import classNames from 'classnames/bind'
import styles from "./Tabs.module.scss";
import Modal from "@/components/common/Modal/Modal";
import Card from '@/components/common/Card/Card';

const cx = classNames.bind(styles);



export default function Tabs() {
  // 카테고리
  const category: Category[] = ["data", "network"];
  // 데이터
  const users: User[] = [
    {
      type: 'data',
      id: 1,
      title:'타이틀',
      desc:'test',
      date:'',
      count:1,
      link:'https://www.naver.com',
      image:'@/images/file.svg',
      imageAlt:'테스트',
      tool: ['test1', 'test2'],
      contList: ['하고있음', '그렇군']
    },
    {
      type: 'network',
      id: 2,
      title:'타이틀2',
      desc:'test2',
      date:'',
      count:1,
      link:'https://www.naver.com',
      image:'@/images/file.svg',
      imageAlt:'테스트2',
      tool: ['test2-1', 'test2-2'],
      contList: ['하고있음2', '그렇군2']
    }
  ]
  // 현재 체크된 카테고리(클릭시 변경됨으로 useState)
  const [checkedCategory, setCheckedCategory] = useState('all');
  // 보이는 리스트(카테고리 기준으로(이미 있는 state) 계산되는 값이라 useState적용 필요 없음)
  const list = checkedCategory == 'all' ? users :
  users.filter((item)=> item.type == checkedCategory);

  // 카테고리 클릭 이벤트
  const changeCategory = (item:string) => {
    setCheckedCategory(item); 
  }
  //클릭된 리스트
  const [selectedContent, setSelectedContent ] = useState<User | null>(null); 
  // 모달 열고 닫힘 처리
  const [showModal, setShowModal ] = useState(false);
  // 리스트 클릭 이벤트
  const findContent = (item:number)  => {  
    const data = users.find( users => users.id == item )
    if(data){
      setShowModal(true);
      setSelectedContent(data)
    }
  }
  const handleClose = () => {
    setShowModal(false);
    setSelectedContent(null);
  }
  return (
    <div>
      <div role="group" aria-label="카테고리 필터">
        <button onClick={()=> changeCategory('all')} aria-pressed={checkedCategory == "all"}>전체</button>
        {
          category.map((category) => (
            <button key={category}  type='button' onClick={()=> changeCategory(category)} aria-pressed={checkedCategory === category}>
              {category}
            </button>
          ))
        }
      </div>
      <ul>
        {
          list.map((data)=> (
            <li key={data.id}>
              <button type="button" onClick={()=>findContent(data.id)} aria-labelledby="">
                
                <Card title={data.title} size="large" img="" desc="" badge="" />
              </button>
            </li>
          ))
        }
      </ul>
      <div>
      </div>
      {
        showModal && selectedContent &&
        <Modal user={selectedContent} onClose={handleClose} />
      }
    </div>
  );
}