using MediatR;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            async Task IRequestHandler<Command>.Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = _context.Activities.FindAsync(request.Id);
                if(activity == null) throw new ArgumentNullException(nameof(request));

                _context.Remove(activity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
