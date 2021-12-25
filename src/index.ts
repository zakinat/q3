
const holesInNumber:any={
    '0':1,
    '1':0,
    '2':0,
    '3':0,
    '4':1,
    '5':0,
    '6':1,
    '7':0,
    '8':2,
    '9':1,
}

const sortArrayByHoles=( arr?:number[]):void=>{
    if(!arr){
        const n=5
        const max=100
        const min=0
     arr=[...Array(n)].map(_=>Math.floor(Math.random() * (max - min) + min))
    }
    let data_withHolesValue=[]
    for (let i=0; i<arr.length; i++){
            const numberValue:number=arr[i]
            let HolesValue=0
            const temp=[...arr[i].toString()].map((c)=>HolesValue+=holesInNumber[c])
            data_withHolesValue.push({numberValue,HolesValue})
    }
    console.log('array before sorting: ', data_withHolesValue)
    console.log('array before sorting: ',arr)
 //sorting the data object depending on the holes value in number 
        data_withHolesValue.sort(function (x, y) {
            const n = x.HolesValue - y.HolesValue;
            if (n !== 0) {
                return n;
            }

            return x.numberValue - y.numberValue;
       });
    console.log('array after sorting by how many holes in numbers: ', data_withHolesValue)
    const arr_aftSort:number[]=[]
    data_withHolesValue.map((item)=>arr_aftSort.push(item.numberValue))
    console.log('array after sorting by how many holes in numbers: ',arr_aftSort)
}

//enter either desired array or leave it blank to generate 5 numbers betwwen 0 and 100
const test_arr=[8,5,9,4,2,1,7]
sortArrayByHoles()