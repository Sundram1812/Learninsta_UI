

function SectionWrapper(Component) {
  return function HOC() {
    return (
        <div className="w-7/12 min-h-[63vh]">
          {Component}
        </div>
    );
  };
}

export default SectionWrapper;
