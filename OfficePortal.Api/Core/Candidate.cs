using System;

namespace OfficePortal.Api.Core
{
    public class Candidate
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CurrentCTC { get; set; }
        public int ExpectedCTC { get; set; }
        public string NoticePeriod { get; set; }

        public int AppliedForPositionId { get; set; }
        public CurrentOpening CurrentOpening { get; set; }

        public string Status { get; set; }  // InProcess || Hold   || Rejected  || Selected

        public string Description { get; set; }
        public DateTime DateOfInterview { get; set; }

        public DateTime CreatedDate { get; set; }

    }
}