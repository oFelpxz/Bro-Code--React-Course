import profilePic from './assets/ani.jpg'
 
function Card(){
  return(
    <div className="card">
      <img src={profilePic}/>
      <h2>Felpxz</h2>
      <p>Estudante de sistemas de informação, e revolucionário chines!</p>
  </div>
  );
}

export default Card