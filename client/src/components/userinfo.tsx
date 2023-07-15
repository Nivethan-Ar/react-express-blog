interface Props {
  label: string;
  value: string;
}

function UserInfo(props: Props) {
  const { label, value } = props;

  return (
    <div className="flex flex-col gap-y-1">
      <label className='pl-2 font-semibold' htmlFor={label}>
        {label}
      </label>
      <input
        className='drop-shadow-lg rounded-md outline-none pl-2'
        type='text'
        name={label}
        id={label}
        value={value}
      />
    </div>
  );
}

export default UserInfo;
