function Test(props) {
    return (
      <div>
        <p className={`${props.className}`}>{props.name}</p>
        <p>{props.error || "Not Found"}</p>
      </div>
    );
  }

export default Test