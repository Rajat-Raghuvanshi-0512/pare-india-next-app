import { CAREER_FORM_API } from '../../../utils/endpoints'
import { Button } from '../../custom'
import Api from '../../../utils/api'
import { useState } from 'react'
import { toast } from 'react-toastify'

const CareerForm = () => {
  const inputStyle = 'w-full rounded-sm bg-[#D9D9D940] p-2 font-montserrat outline-none text-sm mt-1'
  const labelStyle = 'block font-montserrat font-semibold'
  const [file, setFile] = useState(null)
  const [data, setData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    education: '',
    message: '',
    gender: '',
    experience: '',
    position: '',
  })

  const onFileChange = (e) => {
    const file = e.target.files[0]
    setFile(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (file === null) return
    const { fname, lname, phone, email, education, message, gender, experience, position } = data
    const form = new FormData()
    form.append('file', file)
    form.append('fname', fname)
    form.append('lname', lname)
    form.append('phone', phone)
    form.append('email', email)
    form.append('education', education)
    form.append('message', message)
    form.append('gender', gender)
    form.append('experience', experience)
    form.append('position', position)
    try {
      const response = await Api.post(CAREER_FORM_API, form)
      toast.success(response.data.message)
      // setData({
      //   fname: '',
      //   lname: '',
      //   phone: '',
      //   email: '',
      //   education: '',
      //   message: '',
      //   gender: '',
      //   experience: '',
      //   position: '',
      // })
      // setFile(null)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className="mx-5 md:mx-10 md:mt-5 lg:mx-20">
      <h3 className="mx-5 text-center font-montserrat text-3xl font-bold text-red-base md:m-0 md:my-10 md:text-left md:text-4xl lg:text-5xl">
        Embark on a new journey with PARÉ.
      </h3>
      <p className="my-3 text-center font-montserrat text-xs md:text-left md:text-lg lg:text-xl">
        Begin a rewarding journey with us, where your passion and motivation thrive. Apply below to join our team and we
        look forward to connecting with you and discovering your unique talents.
      </p>
      <div>
        <p className="my-5 hidden font-montserrat font-medium italic text-red-base md:block">* stands for required</p>
      </div>
      <form
        className="mb-5 grid grid-cols-1 md:my-10 md:grid-cols-3 md:gap-5 lg:gap-x-16"
        onSubmit={handleSubmit}
        encType="multipart/formdata"
      >
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            First Name <span className="text-red-base">*</span>
          </label>
          <input
            type="text"
            id="fname"
            className={inputStyle}
            required
            name={data.fname}
            value={data.fname}
            onChange={(e) => setData((prev) => ({ ...prev, fname: e.target.value }))}
            placeholder="Your First Name"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Last Name <span className="text-red-base">*</span>
          </label>
          <input
            type="text"
            id="lname"
            className={inputStyle}
            required
            name={data.lname}
            value={data.lname}
            onChange={(e) => setData((prev) => ({ ...prev, lname: e.target.value }))}
            placeholder="Your Last Name"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Email <span className="text-red-base">*</span>
          </label>
          <input
            type="email"
            id="email"
            className={inputStyle}
            required
            name={data.email}
            value={data.email}
            onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="ex: name@example.com"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Phone Number <span className="text-red-base">*</span>
          </label>
          <input
            type="text"
            id="phone"
            className={inputStyle}
            required
            name={data.phone}
            value={data.phone}
            onChange={(e) => setData((prev) => ({ ...prev, phone: e.target.value }))}
            placeholder="+91 XXXX XXXX XX"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Education <span className="text-red-base">*</span>
          </label>
          <input
            type="text"
            id="education"
            className={inputStyle}
            required
            name={data.education}
            value={data.education}
            onChange={(e) => setData((prev) => ({ ...prev, education: e.target.value }))}
            placeholder="ex: BTech, MTech, BA, etc"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Position <span className="text-red-base">*</span>
          </label>
          <input
            type="text"
            id="position"
            className={inputStyle}
            required
            name={data.position}
            value={data.position}
            onChange={(e) => setData((prev) => ({ ...prev, position: e.target.value }))}
            placeholder="Position you are applying for"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Gender <span className="text-red-base">*</span>
          </label>
          <input
            type="text"
            id="gender"
            className={inputStyle}
            required
            name={data.gender}
            value={data.gender}
            onChange={(e) => setData((prev) => ({ ...prev, gender: e.target.value }))}
            placeholder="Male/Female/Others"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Years of experience <span className="text-red-base">*</span>
          </label>
          <input
            type="text"
            id="experience"
            className={inputStyle}
            required
            name={data.experience}
            value={data.experience}
            onChange={(e) => setData((prev) => ({ ...prev, experience: e.target.value }))}
            placeholder="ex: 5"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fname" className={labelStyle}>
            Upload your CV <span className="text-red-base">*</span>
          </label>
          <input type="file" id="fname" className="mt-3" required onChange={onFileChange} accept="application/pdf" />
        </div>
        <div className="mb-5  md:col-span-3">
          <label htmlFor="fname" className={labelStyle}>
            Why should we hire you? <span className="text-red-base">*</span>
          </label>
          <textarea
            id="message"
            className={`${inputStyle} mt-2 h-[150px] resize-none`}
            placeholder="Type your answer here..."
            name={data.message}
            value={data.message}
            required
            onChange={(e) => setData((prev) => ({ ...prev, message: e.target.value }))}
          />
        </div>
        <Button className={'w-fit !px-10 !py-1'}>Submit</Button>
      </form>
    </div>
  )
}

export default CareerForm
