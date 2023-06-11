import { useState } from "react";

import Icon from "../icon/Icon";
import { Icons } from "../icon/Icon.types";
import StyledCheckBox from "./CheckBox.styles";
import type { CheckBoxProps } from "./CheckBox.types";

const CheckBox = ({ label, checked, disabled }: CheckBoxProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(checked);

  const toggleChecked = (): void => {
    !disabled && setIsChecked((wasChecked) => !wasChecked);
  };

  return (
    <StyledCheckBox>
      <button onClick={toggleChecked} disabled={disabled}>
        {isChecked && <Icon icon={Icons.CheckMark} size={14} />}
      </button>
      {label && <span onClick={toggleChecked}>{label}</span>}
    </StyledCheckBox>
  );
};

export default CheckBox;
