import React from 'react'

function Alert(props) {
    const Capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
   props.alert && <div className={`alert alert-${props.alert.value} alert-dismissible fade show`} role="alert">
    <strong>{Capitalize(props.alert.value)}</strong>:{props.alert.message}
  </div>
  )
}

export default Alert
