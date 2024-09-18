import { useState } from "react";

export const useSelection = () => {
  const generateId = () => Math.random().toString(36).substr(2, 9);

  const [groups, setGroups] = useState([{ id: generateId(), fieldA: "", fieldB: "" }]);

  const handleChange = (id: string, field: string, value: string) => {
    const updatedGroups = groups.map((group) =>
      group.id === id ? { ...group, [field]: value } : group
    );
    setGroups(updatedGroups);
  };

  const addGroup = () => {
    setGroups([...groups, { id: generateId(), fieldA: "", fieldB: "" }]);
  };

  const removeGroup = (id: string) => {
    if (groups.length > 1) {
      const updatedGroups = groups.filter((group) => group.id !== id);
      setGroups(updatedGroups);
    }
  };


  return {
    groups,
    handleChange,
    addGroup,
    removeGroup
  }
}