* Với react mình có thể vừa viết giao diện + logic trong cùng 1 file mà k cần phải tách ra rồi linh như khoá JSA nữa

+ các định dạng của file trong React có thể đặt tên : fileName.js, fileName.jsx, (fileName.ts, fileName.tsx chỉ được đặt khi dùng typescript còn nếu đang dùng JS thì không được đặt )

+ Bố cục 1 component trong React

  * import các thư viện cần thiết
  * khai báo các biến
  * khai báo các hàm
  * khai báo các hàm render
  * export component (để cho các component khác có thể import và sử dụng thay vì phải viết lại code như html thông thường)



  - Giao diện sẽ được viết trong hàm return() của file


  - Props và State trong React

  + Props : là property ( thuộc tính) của 1 component
  + Props có thể thể chứa tất cả các kiểu dự liệu đã biết trong JS ( number, string, array, obj, fcn, boolean, null,...)
  + Props được truyền từ component cha xuống component con hoặc ngược lại ( nhưng cách này khó hơn, phải truyển thông qua 1 hàm callback)
  + Props được viết dưới dạng propName = {value} với propsName do người dùng đặt tuỳ chọn nhưng chú ý hạn chế đặt propsName trùng tên dom của html (ví dụ : className, htmlFor, id, style, ...)


  + ...props : truyen tat ca cac props con lai cho 1 component khac (khá nguy hiểm vì không kiểm soát được bao nhiêu props tối thiểu cần truyền vào hay  nhầm lẫn tên props)