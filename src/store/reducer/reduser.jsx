import data from "../../components/data";

export const reducer = (state = data, action) => {
    switch (action.type) {
        case 'add':
            return [...state,action.element]; // تحديث الحالة بالمصفوفة المرسلة عبر payload
        default:
            return state;
    }
};
