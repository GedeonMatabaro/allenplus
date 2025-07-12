import ky from "ky"

const kyInstance = ky.create({
    timeout: 30000,
    parseJson: (text) => JSON.parse(text, (key, value) => {
            if(key.endsWith("At")||key.endsWith("Date") ||key.endsWith("date")||key==="dob") return new Date(value);
            return value;
        }),
});

export default kyInstance;