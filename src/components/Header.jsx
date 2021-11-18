const Header = () => {
    return (
        <section>
        <h1 className="heading">Up and Away</h1>
        <p className="intro">It turns out that pigs <em>can</em> fly... but only with the help of some balloons!<br/><br/>
        Help Penelope the pig stay high in the sky by guessing the word correctly.<br/><br/>
 For every letter you get wrong, one of her balloons will burst.
        Get the word right before the last balloon pops!
        </p>
        <section className="play">
            <p>Let's play!</p>
            <a href="#start">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angles-down" className="svg-inline--fa fa-angles-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"></path></svg>
            </a>
        </section>
        </section>
    )
}

export default Header; 