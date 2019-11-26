const FunctionService = {
    sortAtoZ(data){
        return data.sort((a, b) => {
          if((a.name).toLowerCase() < (b.name).toLowerCase())
            return -1
          if((a.name).toLowerCase() > (b.name).toLowerCase())
            return 1
          return 0
        })
      },
      sortZtoA(data){
        return data.sort((a, b) => {
          if((a.name).toLowerCase() > (b.name).toLowerCase())
            return -1
          if((a.name).toLowerCase() < (b.name).toLowerCase())
            return 1
          return 0
        })
      },
      sortDate(data){
        return data.sort((a, b) => {
          if(a.date_created > b.date_created)
            return -1
          if(a.date_created < b.date_created)
            return 1
          return 0
        })
      },
      parseDate(date){
        if(date !== null){
            const shortDate = date.split('T')[0]
            const dateArray = shortDate.split('-')
            const months = ['January','February','March','April', 'May','June','July','August','September', 'October','November','December'];
            let newDate = []
            let formattedDate = []
            newDate[0] = months[dateArray[1] -1]
            newDate[1] = dateArray[2]
            newDate = newDate.join(' ')
            formattedDate[0] = newDate
            formattedDate[1] = dateArray[0]
            newDate = formattedDate.join(', ')
            return newDate
        }
      },
      renderClass(css){
        if(css === 'Completed'){
            return 'completed'
        }
        if(css === 'To Do'){
            return 'todo'
        }
        if(css === 'In Progress'){
            return 'inprogress'
        }
    }
}

export default FunctionService