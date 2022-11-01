const IsFirstPurchase =  () =>  localStorage.getItem('me') && JSON.parse(localStorage.getItem('me')).status != 'completed'

export default IsFirstPurchase;