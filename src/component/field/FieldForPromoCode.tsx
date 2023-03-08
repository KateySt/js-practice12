import React, {useState} from 'react';
import {ISubmitResult} from "../../interface/ISubmitResult";

const FieldForPromoCode: React.FC = (): JSX.Element => {

    const [{promoCode}, setText] = useState<ISubmitResult>({promoCode: '48183276'});

    const returningPairsOfUnpairedNumbers = (arr: number[]): number[] => {
        return arr.map((num: number) => {
            if (arr[arr.indexOf(num) + 1]) {
                if (num % 2 === 1 &&
                    arr[arr.indexOf(num) + 1] % 2 === 1
                    && num !== arr[arr.indexOf(num) + 1]) {
                    return (num * 10) + arr[arr.indexOf(num) + 1];
                }
                return 0;
            }
            return 0;
        });
    }

    const filtration = (arr: number[]): [number, number] [] => {
        return Array.from(arr.entries())
            .filter(el => el[1] !== 0)
            .filter(el => el[0] !== el[0] + 1);
    }

    const pairedOrUnpaired = (array: number[], paired: boolean): number => {
        if (paired) {
            return array.filter(el => el % 2)
                .reduce((acc, number) => acc + number, 0);
        }
        return array.filter(el => (!(el % 2)))
            .reduce((acc, number) => acc + number, 0);
    }

    const validatePromoCode = (): number => {

        if (promoCode.length < 8)
            return 0;

        if (isNaN(parseInt(promoCode)))
            return 0;

        const array: number[] = Array.from(promoCode, Number);

        const arrayCompleteIndexNumber: [number, number] [] = filtration(returningPairsOfUnpairedNumbers(array));

        const promoOneThousand: boolean = arrayCompleteIndexNumber.map(el => el[0]).length === 2;

        const resultArray: number[] = arrayCompleteIndexNumber.map(el => el[1]);

        const isFirstMaxNumber: boolean = resultArray.indexOf(Math.max.apply(null, resultArray)) === 0;

        const promoTwoThousand: boolean = isFirstMaxNumber && (resultArray.length === 2);

        const one = pairedOrUnpaired(array, true);

        const two = pairedOrUnpaired(array, false);

        const promoHundred: boolean = two > one;

        return promoTwoThousand ?
            2000
            :
            promoOneThousand ?
                1000
                :
                promoHundred ?
                    100
                    :
                    0;
    }

    return (
        <div>
            <input value={promoCode}
                   onChange={(event) => setText({promoCode: event.target.value})}
            />
            <>
                {validatePromoCode()}
            </>
        </div>
    );
}

export default FieldForPromoCode;