// public int Id { get; set; }
// public string? codeBill { get; set; }
// public int IdDepot { get;set; }
// public decimal? Quantity { get; set; }
// public decimal? Price { get; set; }
// public DateTime? CreatedDate { get; set; }
// public DateTime? UpdatedDate { get; set; }
// public string? UserCreate { get; set; }
// public string? UserUpdate { get; set; }
// public string? Status { get; set; }// trangj thais
// public bool IsAcceptance { get; set; }// chấp thuận

export class ImportBillDepot {
    constructor(
        public Id :number,
        public codeBill :string,
        public IdDepot :string,
        public Quantity :number,
        public Price :number,
        public CreatedDate :Date,
        public UpdatedDate :Date,
        public UserCreate :string,
        public UserUpdate :string,
        public Status :string,
        public IsAcceptance :boolean,
    ){}}

   

