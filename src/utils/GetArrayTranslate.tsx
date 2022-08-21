import { useTranslation } from 'react-i18next';

type val = string

const GetArrayTranslate = (value: val) => {

    const { t } = useTranslation();

    return JSON.stringify(`${t(value)}`).replace(/\"/g, "").split("")
}

export default GetArrayTranslate