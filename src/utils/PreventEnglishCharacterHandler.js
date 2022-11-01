const PreventEnglishCharacterHandler = str => !/^[A-Za-z][A-Za-z0-9]*$/.test(str)
export default PreventEnglishCharacterHandler;