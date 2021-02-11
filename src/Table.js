import React from 'react'

const Table = () => {
  return (
    <table className="table table-bordered mt-5" id="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table-success">
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td><a href="https://es.wikipedia.org/wiki/Wikipedia:Portada" target="_blank">Wikipedia</a></td>
      </tr>
      <tr class="table-primary">
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td><a href="https://www.youtube.com/" target="_blank">Youtube</a></td>
      </tr>
      <tr class="table-danger">
        <th scope="row">3</th>
        <td colSpan={2}>Larry the Bird</td>
        <td><a href="https://www.google.com/" target="_blank">Google</a></td>
      </tr>
      <tr class="table-warning">
        <th scope="row">3</th>
        <td colSpan={2}>Larry the Bird</td>
        <td><a href="https://getbootstrap.com/" target="_blank">Bootstrap</a></td>
      </tr>
    </tbody>
  </table>

  )
}

export default Table
