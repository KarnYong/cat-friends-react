function Card() {
  return (
    <div className='bg-dark-blue dib br3 pa3 ma2 grow tc bw2 shadow-5'>
       <img alt='robots' width='200' src='https://robohash.org/karnyong?set=set4' />
       <div className='white'>
         <h2>Karn Yong</h2>
         <p>karnyong@catmail.com</p>
       </div>
    </div>
  );
}

export default Card;
