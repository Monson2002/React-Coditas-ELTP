import { useState } from "react";
import { leaves } from "../mock-backend/data";

const [leaveArr, setLeaveArr] = useState(leaves);

const handleMandatoryClick = (id: number) => {
  console.log('Mandatory CLicked');
  const card = leaves.filter((card) => card.id === id);
  card[0].type = 'Mandatory';
  setLeaveArr([...leaveArr, card[0]])
}

const handleSickClick = (id: number) => {
  console.log('Sick CLicked');
  const card = leaves.filter((card) => card.id === id);
  card[0].type = 'Sick';

}

const handlePlannedClick = (id: number) => {
  console.log('Planned CLicked');
  const card = leaves.filter((card) => card.id === id);
  card[0].type = 'Planned';
}