const Footer = () => {
  return (
    <div class=" bg-gray-900 relative">
      <div class="max-w-2xl mx-auto text-white py-10 mt-40 bottom-0">
        <div class="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p class="order-2 md:order-1 mt-8 md:mt-0">
            {' '}
            &copy; Prathamesh Gawande
          </p>
          <div class="order-1 md:order-2">
            <span class="px-2">About us</span>
            <span class="px-2 border-l">Contact us</span>
            <span class="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
