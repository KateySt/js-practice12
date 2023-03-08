import React from 'react';
import useFieldForPromoCode from "../../hook/useFieldForPromoCode";

const FieldForPromoCode: React.FC = (): JSX.Element => {
    const {validatePromoCode, onChangeSetText, promoCode} = useFieldForPromoCode();

    return (
        <div>
            <input value={promoCode}
                   onChange={onChangeSetText}
            />
            <>
                {validatePromoCode()}
            </>
        </div>
    );
}

export default FieldForPromoCode;