const Contact = () => {
  return (
    <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
      <div className="mx-auto max-w-2xl p-12 lg:max-w-4xl text-white">
        <h1 className="mt-4 text-4xl text-indigo-600">SCHEDULE A PHONE CALL</h1>
        <p className="mt-4 text-lg/8">
          Let&apos;s talk about your monthly bookkeeping needs and how we can
          potentially save you thousands of dollars with some simple tax
          strategies.
        </p>
        <p className="mt-4 text-lg/8">
          Click on the button below to select a day and time that works for you
          and you will be immediately scheduled in my calendar!
        </p>
        <div className="w-full flex justify-center mt-6">
          <a
            href="https://calendly.com/breezebookkeeping/30min"
            className="text-lg/8 text-indigo-600 hover:text-indigo-500 font-semibold"
          >
            <div className="mt-8 rounded bg-white py-2 px-4">Schedule Call</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
